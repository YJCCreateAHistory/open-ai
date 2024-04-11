interface IProps {
  children: React.ReactNode;
}

const Root = (props: IProps) => { 

  const { children } = props;

  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Root;