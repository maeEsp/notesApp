import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NoteManager from './NoteManager';
import SearchBar from './SearchBar';
import Button from './Button';

vi.mock('./SearchBar', () => ({
  default: ({ onSearch }) => (
    <input
      placeholder="Search notes"
      onChange={(e) => onSearch(e.target.value)}
    />
  ),
}));

vi.mock('./Button', () => ({
  default: ({ label, onClick, className }) => (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  ),
}));

describe('NoteManager Component', () => {
  const mockNotes = [
    { id: 1, title: 'Note 1', content: 'Content of the first note' },
    { id: 2, title: 'Note 2', content: 'Second note content goes here' },
  ];

  it('renders notes and search bar correctly', () => {
    render(
      <NoteManager
        notes={mockNotes}
        onDelete={vi.fn()}
        onViewNote={vi.fn()}
        onSearch={vi.fn()}
      />
    );

    // Check search bar
    expect(screen.getByPlaceholderText('Search notes')).toBeInTheDocument();

    // Check notes
    mockNotes.forEach((note) => {
      expect(screen.getByText(note.title)).toBeInTheDocument();
      expect(screen.getByText(`${note.content.slice(0, 30)}...`)).toBeInTheDocument();
    });

    // Check buttons
    expect(screen.getAllByText('X')).toHaveLength(mockNotes.length);
  });

  it('calls onSearch when typing in the search bar', () => {
    const onSearch = vi.fn();
    render(
      <NoteManager
        notes={mockNotes}
        onDelete={vi.fn()}
        onViewNote={vi.fn()}
        onSearch={onSearch}
      />
    );

    const searchInput = screen.getByPlaceholderText('Search notes');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(onSearch).toHaveBeenCalledWith('test search');
  });

  it('calls onDelete when the delete button is clicked', () => {
    const onDelete = vi.fn();
    render(
      <NoteManager
        notes={mockNotes}
        onDelete={onDelete}
        onViewNote={vi.fn()}
        onSearch={vi.fn()}
      />
    );

    const deleteButtons = screen.getAllByText('X');
    fireEvent.click(deleteButtons[0]);

    expect(onDelete).toHaveBeenCalledWith(mockNotes[0].id);
  });

  it('calls onViewNote when a note is clicked', () => {
    const onViewNote = vi.fn();
    render(
      <NoteManager
        notes={mockNotes}
        onDelete={vi.fn()}
        onViewNote={onViewNote}
        onSearch={vi.fn()}
      />
    );

    const firstNote = screen.getByText(mockNotes[0].title);
    fireEvent.click(firstNote);

    expect(onViewNote).toHaveBeenCalledWith(mockNotes[0]);
  });

  it('prevents onViewNote when the delete button is clicked', () => {
    const onViewNote = vi.fn();
    const onDelete = vi.fn();

    render(
      <NoteManager
        notes={mockNotes}
        onDelete={onDelete}
        onViewNote={onViewNote}
        onSearch={vi.fn()}
      />
    );

    const deleteButton = screen.getAllByText('X')[0];
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(mockNotes[0].id);
    expect(onViewNote).not.toHaveBeenCalled();
  });
});
