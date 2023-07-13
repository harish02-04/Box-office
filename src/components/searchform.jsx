import { useState } from 'react';
import { searchval } from '../lib/search';
import { CustomRadio } from './customradio';
import styled from 'styled-components';
const searchform = ({ searchQuery }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inp, setinp] = searchval();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sop, setsop] = useState('shows');

  const setOption = ev => {
    setsop(ev.target.value);
  };
  const Inputchange = ev => {
    setinp(ev.target.value);
  };
  const onsubmit = ev => {
    ev.preventDefault();
    searchQuery(sop, inp);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <SearchInput
          type="text"
          placeholder="Search for something"
          value={inp}
          onChange={Inputchange}
        ></SearchInput>
        <RadiosWrapper>
          <CustomRadio
            label="Shows"
            value="shows"
            name="searchoption"
            checked={sop === 'shows'}
            onChange={setOption}
          ></CustomRadio>

          <CustomRadio
            label="Actors"
            value="actors"
            name="searchoption"
            checked={sop === 'actors'}
            onChange={setOption}
          ></CustomRadio>
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};

export default searchform;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
