package com.example.backend.Materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path="post-material")
public class MaterialController {

    private MaterialService materialService;

    @Autowired
    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

    @PostMapping
    public void createMaterial(@RequestBody Materials material){

//        parse the date from string type to date type to check if the year is greater or equal to 1900
//        other ways the material is not valid to be added to the database
        LocalDate date = LocalDate.parse(material.getMonitor_date());

        if(date.getYear() >= 1900) {
            materialService.createMaterial(material);
        }
    }
}
