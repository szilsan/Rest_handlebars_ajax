package com.szilsan.practice.js.demo.com.szilsan.practice.js.rest;

import java.time.LocalDate;
import java.time.Month;
import java.util.Calendar;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }


    @RequestMapping("/loadContent")
    public ClientContent loadContent() {
        return new ClientContent("MyName1", 18 + counter.intValue(), LocalDate.of(2017, Month.JANUARY, 1));
    }
}