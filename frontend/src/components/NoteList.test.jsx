import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NoteList from './NoteList';
import Button from './Button';

vi.mock('./Button', () => ({
  default: ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
  ),
}));

describe('NoteList Component', () => {
  it('renders notes and buttons correctly', () => {
    const notes = [
      { id: 1, title: 'Note 1', content: 'Content 1' },
      { id: 2, title: 'Note 2', content: 'Content 2' },
    ];
    const onDelete = vi.fn();
    const onUpdate = vi.fn();

    render(<NoteList notes={notes} onDelete={onDelete} onUpdate={onUpdate} />);

    // Check if notes are rendered
    notes.forEach(note => {
      expect(screen.getByText(note.title)).toBeInTheDocument();
      expect(screen.getByText(note.content)).toBeInTheDocument();
    });

    // Check if buttons are rendered
    expect(screen.getAllByText('Delete')).toHaveLength(notes.length);
    expect(screen.getAllByText('Edit')).toHaveLength(notes.length);
  });

  it('calls onDelete when delete button is clicked', () => {
    const notes = [{ id: 1, title: 'Note 1', content: 'Content 1' }];
    const onDelete = vi.fn();
    const onUpdate = vi.fn();

    render(<NoteList notes={notes} onDelete={onDelete} onUpdate={onUpdate} />);

    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(1);
  });

  it('calls onUpdate when edit button is clicked', () => {
    const notes = [{ id: 1, title: 'Note 1', content: 'Content 1' }];
    const onDelete = vi.fn();
    const onUpdate = vi.fn();

    render(<NoteList notes={notes} onDelete={onDelete} onUpdate={onUpdate} />);

    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);

    expect(onUpdate).toHaveBeenCalledWith(notes[0]);
  });
});
