import Repository from "../../../../lib/core/model/repository/Repository";
import Resource from "../../../../lib/core/model/schema/resources/Resource";

describe('Building test suite', 
()=>{
    it('should be able to create a repository for a specific type', 
    ()=>{
        // given 
        const repository = new Repository<Resource>(); 

        // when then
        expect(repository).toBeTruthy();
    }); 

    it('should be able to add elements on a repository and retrieve them all', 
    ()=>{
        // given 
        const repository = new Repository<Resource>(); 

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
        // given 
        const repository = new Repository<Resource>(); 

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
        // given 
        const repository = new Repository<Resource>(); 

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
        // given 
        const repository = new Repository<Resource>(); 

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