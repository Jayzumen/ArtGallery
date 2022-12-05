import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import SearchedArt from './SearchedArt';

describe('SearchedArt component', () => {
  test('renders nothing when artwork is not defined', () => {
    const { container } = render(<SearchedArt />);
    expect(container).toBeEmptyDOMElement();
  });

  const art = [
    {
      id: 1,
      title: 'Art 1',
      image_id: '129884',
      thumbnail: {
        alt_text: 'Art 1 thumbnail'
      }
    },
    {
      id: 2,
      title: 'Art 2',
      image_id: '28560',
      thumbnail: {
        alt_text: 'Art 2 thumbnail'
      }
    }
  ];

  test('renders artwork correctly', () => {
    const { getAllByText } = render(
      <Router>
        <SearchedArt art={art} />
      </Router>
    );
    expect(getAllByText(/art/i).length).toBe(2);
  });

  test('renders correct title for each artwork', () => {
    const { getAllByText } = render(
      <Router>
        <SearchedArt art={art} />
      </Router>
    );
    const artItems = getAllByText(/art/i);
    expect(artItems[0]).toHaveTextContent('Art 1');
    expect(artItems[1]).toHaveTextContent('Art 2');
  });

  //   TODO: Find a way to get the src to not be null
  //   test('renders correct image for each artwork', async () => {
  //     const { getAllByText } = render(
  //       <Router>
  //         <SearchedArt art={art} />
  //       </Router>
  //     );
  //     const artItems = await waitFor(() => getAllByText(/art/i));
  //     expect(artItems[0]).toHaveAttribute(
  //       'src',
  //       'https://www.artic.edu/iiif/2/129884/full/843,/0/default.jpg'
  //     );
  //     expect(artItems[1]).toHaveAttribute(
  //       'src',
  //       'https://www.artic.edu/iiif/2/28560/full/843,/0/default.jpg'
  //     );
  //   });
});
