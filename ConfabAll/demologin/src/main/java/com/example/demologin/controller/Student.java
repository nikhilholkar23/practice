package com.example.demologin.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Student {

  @GetMapping
  @RequestMapping("/student")
    public String getName(){

        return"abc";
    }

}
