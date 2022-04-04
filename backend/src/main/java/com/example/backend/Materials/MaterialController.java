package com.example.backend.Materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

// Materials controller
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
    public void createMaterial(@RequestBody Materials material) {


        String fileExtension = "";

//        file is not mandatory here we check if it`s added or not
//        if it`s added we need to check if it`s valid
        if (material.getFile() != null) {

//        the last 4 characters from the file string represent the extension
//        so i stored it in fileExtension
            fileExtension = material.getFile().substring(material.getFile().length() - 4);


//        check if the year is greater or equal to 1900
//        and language/section have valid value
//        other ways the material is not valid to be added
            if (material.getMonitor_date().getYear() >= 1900 &&
                    (fileExtension.equals(".pdf") || fileExtension.equals(".png")) &&
                    (material.getLanguage().equals("عربي") || material.getLanguage().equals("إنجليزي")) &&
                    (material.getSection().equals("السياسة") || material.getSection().equals("الرياضة") ||
                            material.getSection().equals("الاجتماعي"))) {

                materialService.createMaterial(material);
            }
        }


//            if the file not added
        else {
//        check if the year is greater or equal to 1900
//        and the file extension is either pdf or png
//        and language/section have valid value
//        other ways the material is not valid to be added
            if (material.getMonitor_date().getYear() >= 1900 &&
                    (material.getLanguage().equals("عربي") || material.getLanguage().equals("إنجليزي")) &&
                    (material.getSection().equals("السياسة") || material.getSection().equals("الرياضة")) ||
                    (material.getSection().equals("الاجتماعي"))) {

                materialService.createMaterial(material);
            }
        }
    }

    //    search method get`s all the materials that have by title
//    (it works also when it is just part of the title)
    @GetMapping("/search/{title}")
    public List<Materials> searchByTitle(@PathVariable String title) {
        return materialService.searchByTitle(title);
    }

    //    get all materials to show before search
    @GetMapping("/all-materials")
    public List<Materials> getAllMaterials() {
        return materialService.getAllMaterials();
    }

    //    delete material by id
    @DeleteMapping("/delete/{id}")
    public List<Materials> deleteMaterial(@PathVariable String id) {

        return materialService.deleteMaterial(id);
    }

    //    get material by specific id
    @GetMapping("/{id}")
    public Materials getMaterialById(@PathVariable String id) {
        return materialService.getMaterialById(id);
    }

    // update material info
    @PutMapping("/update/{id}")
    public void updateMaterial(@PathVariable String id,@RequestBody Materials material) {
        materialService.updateMaterial(id,material);
    }

}
