import * as S from './styles';

export default function Main({
  title = 'React Avançado',
  description = 'TypeScript, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo do ReactJs na cor rosa"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desevolvedor sentado de frente para uma tela com códigos"
      />
    </S.Wrapper>
  );
}
