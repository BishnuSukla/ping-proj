package com.pingidentity.error;

import org.springframework.http.HttpStatus;

import java.util.Objects;

public class FileException extends ApiException {
    private final HttpStatus httpStatus;

    public FileException(String message, HttpStatus httpStatus) {
        super(Objects.requireNonNull(message, "message must not be null"));
        this.httpStatus = httpStatus;
    }

    public FileException(String message, Throwable cause, HttpStatus httpStatus) {
        super(message, cause);
        this.httpStatus = httpStatus;
    }

    @Override
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
