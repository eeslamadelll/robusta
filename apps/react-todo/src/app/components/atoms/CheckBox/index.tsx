import { useTodos } from '@/app/context/todos-context';
import * as Styled from './styles';

type CheckboxProp = {
  id: string;
  title: string;
  completed: boolean;
};

export const CheckBox = ({ id, title, completed }: CheckboxProp) => {
  const markLength = 15.749618530273438;
  const { dispatch } = useTodos();
  return (
    <Styled.CheckBoxLabel htmlFor={id}>
      <Styled.CheckBox
        type="checkbox"
        id={id}
        defaultChecked={completed}
        value={title}
        onChange={(e) => {
          dispatch({
            type: 'complete_todo',
            id,
            completed: e.target.checked,
          });
        }}
      />
      <Styled.CheckBoxIndicator viewBox="0 0 16 16">
        <Styled.CheckBoxCircleBG />
        <Styled.CheckBoxCircleRipple />
        <Styled.CheckBoxPath
          transform="translate(1, 2)"
          strokeDashoffset={markLength}
          strokeDasharray={markLength}
          d="M1.42420783 6.03075103 5.00322799 9.5725669 12.5960318 2.01301652"
        />
      </Styled.CheckBoxIndicator>
      <Styled.CheckBoxText>{title}</Styled.CheckBoxText>
    </Styled.CheckBoxLabel>
  );
};
