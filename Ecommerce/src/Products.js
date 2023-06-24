import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <Wrapper>
      <div>Product</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${'' /* background-color: ${({theme}) => theme.colors.bg}; */}
  height: 100vh;

  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
