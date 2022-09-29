import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo do ReactJs na cor rosa"
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>TypeScript, NextJS e Styled Components</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desevolvedor sentado de frente para uma tela com códigos"
      />
    </S.Wrapper>
  );
}
