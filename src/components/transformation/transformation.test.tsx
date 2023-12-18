import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Transformation } from './transformation';
import { mockCharacter } from '../../mocks/character.mock';

describe('Transformation component', () => {
  const setChangeTransformationImage = jest.fn();

  beforeEach(() => {
    render(
      <Transformation
        stateCharacter={mockCharacter}
        setChangeTransformationImage={setChangeTransformationImage}
      />
    );
  });

  test('renders the transformation buttons', async () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('calls setChangeTransformationImage when a button is clicked', async () => {
    const button = await screen.getAllByRole('button');
    fireEvent.click(button[0]);

    expect(setChangeTransformationImage).toHaveBeenCalledWith('ssj.png');
  });
});
