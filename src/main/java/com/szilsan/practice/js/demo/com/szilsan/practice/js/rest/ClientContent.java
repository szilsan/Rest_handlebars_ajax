package com.szilsan.practice.js.demo.com.szilsan.practice.js.rest;

import java.time.LocalDate;
import java.util.Date;

public class ClientContent {

    private String name;
    private int age;
    private LocalDate birthDate;

    public ClientContent(String name, int age, LocalDate birthDate) {
        this.name = name;
        this.age = age;
        this.birthDate = birthDate;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

}
