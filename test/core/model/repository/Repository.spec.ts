import { Container, Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../../lib/core/model/repository/IRepository";
import Resource from "../../../../lib/core/model/schema/resources/Resource";
import { setup } from "../../../setup.spec";
import AppConst from "../../../../lib/core/ioc/app.const";

describe('IRepository test suite', 
()=>{

    
    var repository:IRepository<Resource>;

    beforeAll( 
        ()=>{
            const container = new Container();
            const facade:Facade = setup(container);
            repository = container.resolve(AppConst.RESOURCE_REPOSITORY) as IRepository<Resource>;
        }
    ); 

    beforeEach( 
        ()=>{
            repository.reset();
        }
    )

    it('should be able to reset a repository for a specific type', 
    ()=>{
        // when 
        repository.add(new Resource(1,"gold"));
        repository.add(new Resource(2,"wood"));
        repository.add(new Resource(3,"mill"));
        repository.reset();
        
        repository.add(new Resource(1,"gold"));
        repository.add(new Resource(2,"wood"));
        repository.add(new Resource(3,"mill"));
        repository.reset();
        const results = repository.getAll();

        // when then
        expect(results).toEqual([]);
    });

    it('should be able to create a repository for a specific type', 
    ()=>{
        // when then
        expect(repository).toBeTruthy();
    }); 

    it('should be able to add elements on a repository and retrieve them all', 
    ()=>{
        // when 
        repository.add(new Resource(1,"gold"));
        repository.add(new Resource(2,"wood"));
        repository.add(new Resource(3,"mill"));
        const results = repository.getAll();

        // when then
        expect(results.length).toEqual(3);
        expect(results[0].id).toEqual(1);
        expect(results[1].id).toEqual(2);
        expect(results[2].id).toEqual(3);
    }); 

    it('should be able to add elements on a repository and remove one', 
    ()=>{
        // when 
        repository.add(new Resource(1,"gold"));
        repository.add(new Resource(2,"wood"));
        repository.add(new Resource(3,"mill"));
        repository.remove( repository.getAll()[1] );
        const results = repository.getAll();

        // when then
        expect(results.length).toEqual(2);
        expect(results[0].id).toEqual(1);
        expect(results[1].id).toEqual(3);
    }); 

    it('should be able to add elements on a repository and retrieve those with specific criteria', 
    ()=>{
        // when 
        repository.add(new Resource(1,"gold1"));
        repository.add(new Resource(1,"gold2")); // duplicate
        repository.add(new Resource(2,"wood"));
        repository.add(new Resource(3,"mill"));
        const results = repository.getAllBy("id",1);

        // when then
        expect(results.length).toEqual(2);
        expect(results[0].id).toEqual(1);
        expect(results[0].name).toEqual("gold1");
        expect(results[1].id).toEqual(1);
        expect(results[1].name).toEqual("gold2");
    }); 

    it('should be able to add elements on a repository and retrieve one with specific criteria', 
    ()=>{
        // when 
        repository.add(new Resource(1,"gold"));
        repository.add(new Resource(2,"wood"));
        repository.add(new Resource(3,"mill"));
        const results = repository.getOneBy("id",1);

        // when then
        expect(results.id).toEqual(1);
        expect(results.name).toEqual("gold");
    }); 
})