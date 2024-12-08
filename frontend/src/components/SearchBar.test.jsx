import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('renders the search input with correct placeholder', () => {
    render(<SearchBar onSearch={vi.fn()} />);

    // Check if input is rendered with the correct placeholder
    const input = screen.getByPlaceholderText('Search by title...');
    expect(input).toBeInTheDocument();
  });

  it('calls onSearch with the correct value when typing', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    // Simulate typing into the input
    const input = screen.getByPlaceholderText('Search by title...');
    fireEvent.change(input, { target: { value: 'test search' } });

    // Verify onSearch is called with the correct value
    expect(onSearch).toHaveBeenCalledWith('test search');
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('updates the input value correctly', () => {
    render(<SearchBar onSearch={vi.fn()} />);

    const input = screen.getByPlaceholderText('Search by title...');
    fireEvent.change(input, { target: { value: 'example' } });

    // Check if the input value updates as expected
    expect(input.value).toBe('example');
  });
});
