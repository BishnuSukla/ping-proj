package com.pingidentity.controller;

import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Option;
import com.pingidentity.error.FileException;
import com.pingidentity.view.FoodView;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class FoodController {

    public final static com.jayway.jsonpath.Configuration JSON_PATH_CONFIG =
            com.jayway.jsonpath.Configuration.defaultConfiguration()
                    .addOptions(Option.SUPPRESS_EXCEPTIONS);

    @GetMapping("food")
    public List<FoodView> getFood(@RequestParam (required = false, defaultValue = "20") final int numberOfItems) {

        URI jsonPath;
        try {
            URL url = getClass().getResource("/food.json");
            if (url != null) {
                jsonPath = url.toURI();
            } else {
                throw new FileException("Unable to locate JSON file.", HttpStatus.NOT_FOUND);
            }
        } catch (URISyntaxException e) {

            throw new FileException(e.getMessage(), HttpStatus.NOT_FOUND);
        }

        String foodJson = null;
        if (jsonPath != null) {
            try {
                foodJson = Files.readString(Paths.get(jsonPath));
            } catch (IOException e) {
                throw new FileException("Unable to read JSON file.", e.getCause(), HttpStatus.UNPROCESSABLE_ENTITY);
            }
        }

        List<FoodView> foodItems = null;
        if (foodJson != null) {
            List<Map<String, Object>> resultsJson = JsonPath.using(JSON_PATH_CONFIG)
                    .parse(foodJson)
                    .read("$.results");


            if (resultsJson != null && !resultsJson.isEmpty()) {
                foodItems = new ArrayList<>(resultsJson.size());

                for (Map<String, Object> item : resultsJson) {
                    foodItems.add(FoodView.of(item));
                }
            }
        }

        return foodItems.subList(0, numberOfItems);
    }
}
