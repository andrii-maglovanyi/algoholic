// Leaf
export class Employee {
  constructor(public name: string, private salary: number) {}

  getSalary() {
    return this.salary;
  }
}

// Composite
export class Department {
  constructor(public name: string, private employees: Employee[] = []) {}

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getDepartmentAverageSalary() {
    if (!this.employees.length) {
      return 0;
    }

    return (
      this.employees.reduce(
        (total, employee) => total + employee.getSalary(),
        0
      ) / this.employees.length
    );
  }
}

// Component
export class Organization {
  constructor(public name: string, private departments: Department[] = []) {}

  addDepartment(department: Department) {
    this.departments.push(department);
  }

  getAverageSalary() {
    if (!this.departments.length) {
      return 0;
    }

    return (
      this.departments.reduce(
        (total, department) => total + department.getDepartmentAverageSalary(),
        0
      ) / this.departments.length
    );
  }
}
