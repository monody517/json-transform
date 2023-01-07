import {Popover} from "antd";


const CodeTypeSelector = () => {

  const content = (
    <div>
      <div className={'content-item'}>TypeScript</div>
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
      }} />
      <div>
        <Popover placement="bottom" content={content}>
          <div>TypeScript</div>
        </Popover>
      </div>
    </div>
  )
}

export default CodeTypeSelector
