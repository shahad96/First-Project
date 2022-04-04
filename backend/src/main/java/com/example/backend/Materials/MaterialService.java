package com.example.backend.Materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

// Materials service
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

//    delete material by id
    public List<Materials> deleteMaterial(String id){

        Long material_id = Long.parseLong(id);
        materialDao.deleteById(material_id);
        return materialDao.findAll();
    }

//    get material by id to show material details
    public Materials getMaterialById(String id){

        Long material_id = Long.parseLong(id);
        return materialDao.getById(material_id);
    }

//    update material
    public void updateMaterial(String id,Materials material){
        Long material_id = Long.parseLong(id);
        material.setId(material_id);
        materialDao.save(material);
    }
}
