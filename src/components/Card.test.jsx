import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Card from './Card';

it('expect to render Card component', () => {
    render(<Card />);
    expect(screen.getByAltText('robots')).toBeInTheDocument();
});
