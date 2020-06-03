import { Employee, Department, Organization } from "./composite";
describe("Composite", () => {
  test("Should get average salary of the organization", () => {
    const marketingDepartment = new Department("Marketing");
    marketingDepartment.addEmployee(new Employee("Andrii", 1000));
    marketingDepartment.addEmployee(new Employee("Kim", 1200));

    const salesDepartment = new Department("Sales");
    salesDepartment.addEmployee(new Employee("Mark", 2500));
    salesDepartment.addEmployee(new Employee("Lucas", 900));

    const organization = new Organization("Roga");

    organization.addDepartment(marketingDepartment);
    organization.addDepartment(salesDepartment);

    expect(organization.getAverageSalary()).toBe(1400);
  });
});
