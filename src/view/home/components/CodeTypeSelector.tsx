import {Popover} from "antd";
import {CaretDownOutlined} from "@ant-design/icons";


const CodeTypeSelector = () => {

  const content = (
    <div>
      <div
        style={{
          cursor: 'pointer',
        }}
      >
        TypeScript
      </div>
    </div>
  )

  return (
    <div
      style={{
        backgroundColor: '#2c3e50',
        display: "flex",
        flexDirection: "row"
      }}
    >
      <div style={{
        width: '50%',
        backgroundColor: '#2c3e50'
      }}/>
      <div>
        <Popover placement="bottom" content={content}>
          <div
            style={{
              cursor: 'pointer',
              fontSize: 16,
              color: 'white',
              marginLeft: 12,
            }}
          >
            TypeScript
            <CaretDownOutlined style={{marginLeft: 4}}/>
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default CodeTypeSelector
