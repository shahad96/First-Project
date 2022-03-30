package com.example.backend.Materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService {

    private MaterialDao materialDao;

    @Autowired
    public MaterialService(MaterialDao materialDao) {
        this.materialDao = materialDao;
    }

    public  void createMaterial(Materials material){
        materialDao.save(material);
    }

    // get all materials by title (full title or part of it)
    public List<Materials> searchByTitle(String title){

        return materialDao.findMaterialsByTitle(title);
    }

//    return all materials
    public List<Materials> getAllMaterials(){
        return materialDao.findAll();
    }

    public void deleteMaterial(String id){

        Long material_id = Long.parseLong(id);
        materialDao.deleteById(material_id);
    }
}
