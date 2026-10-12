# Juliana Souza — Estética e Beleza

Site estático, sem instalação de dependências ou etapa de build.

## Executar

```sh
python -m http.server 3000 --bind 127.0.0.1
```

Acesse http://localhost:3000. Mantenha o terminal aberto.

## Conteúdo

`config.js` centraliza WhatsApp, mensagem, Instagram, região, domínio e galeria. A mensagem é codificada com `encodeURIComponent` em `app.js`. Textos editoriais e a estrutura semântica estão em `index.html`; identidade e composições responsivas, em `style.css`.

## Pendências para publicação

- Confirmar região e preencher `areaServed` sem presumir cidades ou bairros.
- Confirmar domínio e preencher `siteUrl` (ativa canonical e og:url). Gerar sitemap e robots com esse domínio antes da publicação; nenhum domínio foi inventado.
- Confirmar autorização, identidade e ordem dos pares antes/depois. A montagem `resultado 04.png` não está publicada. `results` aceita objetos `{before, after, alt, authorized:true}`. O comparador só deve ser usado com enquadramentos compatíveis; mantém proporções via object-fit:contain.
- Preços, duração e frequência do material promocional não foram tratados como confirmados.

## Fotografias

- Hero: original 1194×1596, iluminação frontal suave, retrato vertical, fundo neutro. Melhor legibilidade e enquadramento dentre as duas fotos fornecidas. Fundo removido com ferramenta integrada de imagem, exportado com alpha em `assets/juliana-recorte.webp`. Original preservado.
- Sobre: foto 1200×1600 em evento; contextualiza a profissional, sem usá-la como retrato recortado por conta do fundo movimentado.
- Equipamento: imagem própria 1200×1200 otimizada em WebP.
- Logo: arquivo original branco, preservado em WebP transparente.
- Material explicativo EZBODY não foi integrado como imagem; somente usado como referência editorial, com cautela sobre promessas.

Prompt usado na ferramenta integrada (background-extraction): “Remove ONLY the wall/background, creating a clean transparent cutout of the exact original woman, clothing, hands, wires and device. Preserve original pixels, facial features, smile, body proportions, hair, pose, white coat and shirt text faithfully. No beauty retouching, no reconstruction, no new details. Keep entire existing figure and framing. Actual alpha transparency. Asset for website hero.”

Referência de conteúdo: https://ezbody.com.br/ezbody-o-treino-do-futuro-sem-sofrimento-e-com-resultado/

## Verificação

Chrome headless: capturas desktop 1440px e mobile 390px; verificações de overflow, imagens, URLs e mensagem oficial, menu e FAQ em sete tamanhos. Animações respeitam prefers-reduced-motion. Revisão não equivale a auditoria formal de acessibilidade ou teste em dispositivos físicos.

## Refinamento do equipamento

Nova foto fornecida: `stimulus_physio_htm_aparelho_de_multicorrentes_04_canais_119_2_f95059a178db4c01351bc50f9d2c323b.webp` (2000×2000). O ângulo original de três quartos é preservado; composição CSS com perspectiva, sombra e curva dourada. Fontes dos CTAs aumentadas para 13px no desktop e 12px no mobile (navbar 11px).

Asset atualizado: `assets/equipamento-recorte.webp`, com transparência real, produzido pela ferramenta integrada de imagem. Prompt: “Extract only the exact photographed HTM Stimulus Physio electrostimulation device as a transparent product cutout. Preserve its existing three-quarter side angle, proportions, labels, buttons, screen, ports, original color and physical details faithfully. Do not redesign or add features. Remove the white background; exclude the detached retailer graphic in upper left since it is outside the product. Tight composition around whole device with small transparent margin. Actual alpha transparency, no floor, no added shadow.” Revisão visual desktop e mobile realizada após a integração.
