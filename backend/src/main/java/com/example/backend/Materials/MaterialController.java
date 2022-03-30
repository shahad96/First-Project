package com.example.backend.Materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path="material")
public class MaterialController {

    private MaterialService materialService;

    @Autowired
    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

//    task one add material
    @PostMapping("/post")
    public void createMaterial(@RequestBody Materials material){

//        parse the date from string type to date type to check if the year is greater or equal to 1900
//        other ways the material is not valid to be added to the database
        LocalDate date = LocalDate.parse(material.getMonitor_date());

        if(date.getYear() >= 1900) {
            materialService.createMaterial(material);
        }
    }

//    search method get`s all the materials that have by title
//    (it works also when it is just part of the title)
    @GetMapping("/search/{title}")
    public List<Materials> searchByTitle(@PathVariable String title){
        System.out.println(title);
        return materialService.searchByTitle(title);
    }

//    get all materials to show before search
    @GetMapping("/all-materials")
    public List<Materials> getAllMaterials(){
        return materialService.getAllMaterials();
    }

//    delete material by id
    @DeleteMapping("/delete/{id}")
    public void deleteMaterial(@PathVariable String id){

        materialService.deleteMaterial(id);
    }

    //    get material by specific id
    @GetMapping("/{id}")
    public Materials getMaterialById(@PathVariable String id){
        return materialService.getMaterialById(id);
    }
}
