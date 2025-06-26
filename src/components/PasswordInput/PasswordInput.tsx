import React, {useState} from 'react';
import TextField from '../TextField/TextField';
import {TouchableOpacity} from 'react-native';
import EyeOpenIcon from '../../../assets/icons/EyeOpenIcon';
import EyeClosedIcon from '../../../assets/icons/EyeClosedIcon';

function PasswordInput({
  editable,
  error,
  onBlur = () => {},
  onChange,
  title,
  value,
}: {
  editable?: boolean;
  error?: string;
  onBlur?: () => void;
  onChange: (val: string) => void;
  title: string;
  value: string;
}) {
  const [passHidden, setPassHidden] = useState<boolean>(true);
  return (
    <TextField
      error={error}
      hideText={passHidden}
      isRequired
      onBlur={onBlur}
      onChange={onChange}
      suffix={
        <TouchableOpacity onPress={() => setPassHidden(!passHidden)}>
          {passHidden ? (
            <EyeOpenIcon height={20} width={24} />
          ) : (
            <EyeClosedIcon />
          )}
        </TouchableOpacity>
      }
      title={title}
      value={value}
      editable={editable}
    />
  );
}

export default PasswordInput;
