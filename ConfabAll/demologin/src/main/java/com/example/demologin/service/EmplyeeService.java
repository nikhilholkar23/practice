package com.example.demologin.service;

import com.example.demologin.model.Employee;
import com.example.demologin.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class EmplyeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee save(Employee employee){
        return employeeRepository.save(employee);

    }
    public List<Employee>getList(){
        return employeeRepository.findAll();
    }

}
