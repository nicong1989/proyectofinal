import styled from 'styled-components';
   
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: rgb(32, 58, 67);
  justify-content: center;
  padding-bottom:20px;
`;
   
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin: 0;
    color: white;
`;

export const Map = styled.div`
display: flex;
justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: left;
  
  width: 20%;

  @media (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
`;

export const Text = styled.p`
font-size: 12px;
color: white;
`;
