const {expect} = require('chai');
const {isSymmetric} = require('./checkForSymetry');

describe('isSymmetri', () =>{

    it('should return false input', () =>{
        //Arrange
        let input = 'Not array';

        //Act

        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.false;
    });

    it('should return true if input is an symmetric array', () =>{
        //Arrange 
        let input = [1,2,3,4,3,2,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.true;
    })

    it('should return false if input array is not symmetric', () =>{

        //Arrange 
        let input = [1,2,3,4,3,2,1];
        //Act
        let result = isSymmetric(input);
        //Assert
        expect(result).to.be.false;        

    })

})