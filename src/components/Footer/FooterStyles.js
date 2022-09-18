import styled from 'styled-components';
   
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background:  #a98f3b;
  width: 100%;
  justify-content: center;
  padding-bottom:20px;
  min-height: 240px;
`;
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin: 0;
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
  align-items: flex-start;
  align-content: center;
  width: 20%;

  @media (max-width: 767px) {
    text-align: center;
    width: 100%;
  }
`;
   

   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 12px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Icon = styled.div`
  display: flex;
  border-top: 1px white solid;
  padding-top: 10px;
  width: 90%;
  font-size: 1.5rem;
  justify-content: flex-end;
  gap: 3%;
  color: white;
`;