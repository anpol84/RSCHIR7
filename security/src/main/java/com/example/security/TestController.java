package com.example.security;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/test")
    public String check(){
        System.out.println("Allaha");
        return "hello";
    }
}
