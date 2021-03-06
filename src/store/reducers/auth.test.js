import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

configure({adapter: new Adapter()});

describe('auth reducer', () => {
    // let wrapper;

    // beforeEach(() => {
    //     wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>); 
    // });

    it('should return the initial state', () => {
        // wrapper.setProps({ings: {salad: 0}});
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
    
    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    

    });
});