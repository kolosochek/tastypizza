import PageContainer from './components/PageContainer'

// redux
import Category from './components/Category';

export default function Index() {
  return (
    <>
      <PageContainer
        pageTitle={"Вкусная пицца в Краснодаре!"}
        showCart={true}
      >
        <Category />
      </PageContainer>
    </>
  )
}
