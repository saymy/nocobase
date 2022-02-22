import { DragOutlined } from '@ant-design/icons';
import { useFieldSchema } from '@formily/react';
import { useSchemaInitializer } from '@nocobase/client';
import { Space } from 'antd';
import React from 'react';
import { DragHandler } from '../../../schema-component';

export const TableRecordActionDesigner = (props: any) => {
  const fieldSchema = useFieldSchema();
  const { render } = useSchemaInitializer(fieldSchema['x-initializer']);
  console.log("fieldSchema['x-initializer']", fieldSchema['x-initializer'])
  return (
    <div className={'general-schema-designer'}>
      <div className={'general-schema-designer-icons'}>
        <Space size={2} align={'center'}>
          <DragHandler>
            <DragOutlined />
          </DragHandler>
          {render()}
        </Space>
      </div>
    </div>
  );
};