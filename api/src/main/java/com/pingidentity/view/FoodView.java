package com.pingidentity.view;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import com.jayway.jsonpath.Option;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

import java.util.Map;

@Builder
@Value
@AllArgsConstructor
public class FoodView {

    public final static com.jayway.jsonpath.Configuration JSON_PATH_CONFIG =
            com.jayway.jsonpath.Configuration.defaultConfiguration()
                    .addOptions(Option.SUPPRESS_EXCEPTIONS);

    private final String title;
    private final String imageSource;
    private final String id;

    public static FoodView of(final Map<String, Object> foodMap) {
        FoodViewBuilder builder = FoodView.builder();

        DocumentContext parsedFoodMap = JsonPath.using(JSON_PATH_CONFIG).parse(foodMap);

        Object itemObject = parsedFoodMap.read("$.id");

        builder.title(parsedFoodMap.read("$.title"))
                .imageSource(parsedFoodMap.read("$.image"))
                .id(String.valueOf(itemObject));

        return builder.build();
    }
}
