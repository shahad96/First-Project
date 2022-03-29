package com.example.backend.Materials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
