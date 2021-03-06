import React from 'react';
import Button from '../components/Button';

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Tertiary = () => <Button variant='tertiary'>Tertiary</Button>