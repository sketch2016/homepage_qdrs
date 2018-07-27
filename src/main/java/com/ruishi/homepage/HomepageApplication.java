package com.ruishi.homepage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class HomepageApplication {

    @CrossOrigin
    @RequestMapping("/test")
    public String test() {
        return "index";
    }

    public static void main(String[] args) {
        SpringApplication.run(HomepageApplication.class, args);
    }
}
