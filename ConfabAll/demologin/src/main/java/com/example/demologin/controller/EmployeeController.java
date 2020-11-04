package com.example.demologin.controller;

import com.example.demologin.model.Employee;
import com.example.demologin.service.EmplyeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
    @Autowired
    private EmplyeeService emplyeeService;
    @GetMapping("/Emplist")
    public List<Employee>getList()
    {
        return emplyeeService.getList();
    }
    @PostMapping("/save")
    public Employee save(@RequestBody Employee employee){
        return emplyeeService.save(employee);
    }
}
