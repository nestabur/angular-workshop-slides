import angular from 'angular';
import ExampleController from './example-controller';

const dependencies = [

];

export default angular
    .module('example-module', dependencies)
    .controller('ExampleController', ExampleController);
