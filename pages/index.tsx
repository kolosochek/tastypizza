import PageContainer from '../src/components/PageContainer/PageContainer'
import Category from '../src/components/Category/Category';

export default function Index() {
  return (
      <PageContainer
        pageTitle={"Самая вкусная пицца в Краснодаре!"}
        showCart={true}
      >
        <Category />
      </PageContainer>
  )
}
