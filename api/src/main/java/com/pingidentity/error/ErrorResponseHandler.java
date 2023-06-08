package com.pingidentity.error;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ErrorResponseHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(FileException.class)
    public ResponseEntity<Object> fileError(FileException e) {
        return new ResponseEntity<>(e.getMessage(), e.getHttpStatus());
    }
}
