import React from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import AppBar from '../../components/AppBar/AppBar';
import BackArrowIcon from '../../../assets/icons/BackArrow';
import {Colors} from '../../theme/color';

function NewTransaction() {
  return (
    <BaseLayout>
      <AppBar title="Add Transaction" isBackBtnEnabled={true} />
    </BaseLayout>
  );
}

export default NewTransaction;
