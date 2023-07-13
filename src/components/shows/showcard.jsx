import styled from 'styled-components';
import { SearchImgWrapper, SearchCard } from '../common/Searchcard';
import { StarIcon } from '../common/staricon';
import { useRef } from 'react';
const shwcard = ({ name, img, summary, id, starred, isstar }) => {
  const summ = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.*?>/g, '') + '...'
    : 'No Description';
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const stark = useRef();
  const handlestar = () => {
    starred(id);
    const btn = stark.current;
    if (!btn) return;
    if (isstar) {
      btn.classList.remove('animate');
    } else {
      btn.classList.add('animate');
    }
  };
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={img}></img>
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summ}</p>
      <ActionSection>
        <a href={`/show/${id}`} target="blank">
          Read more
        </a>
        <StarBtn ref={stark} type="button" onClick={handlestar}>
          <StarIcon active={isstar}></StarIcon>
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default shwcard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
