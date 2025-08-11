const historicalData = [
    { description: 'Internet', type: 'Pagar', value: 99.90, date: '2024-09-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Aluguel', type: 'Pagar', value: 1320.00, date: '2024-09-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Água', type: 'Pagar', value: 198.00, date: '2024-09-20', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 0, date: '2024-09-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Kim', type: 'Pagar', value: 200.00, date: '2024-09-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Kim', type: 'Pagar', value: 200.00, date: '2024-10-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet', type: 'Pagar', value: 99.90, date: '2024-10-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Aluguel', type: 'Pagar', value: 1320.00, date: '2024-10-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz Outra Casa', type: 'Pagar', value: 151.96, date: '2024-10-28', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Kim', type: 'Pagar', value: 200.00, date: '2024-11-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet', type: 'Pagar', value: 99.90, date: '2024-11-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Calça Wanessa', type: 'Pagar', value: 159.00, date: '2024-11-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Cartão Tio Edson', type: 'Pagar', value: 946.58, date: '2024-11-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2024-11-07', installment: '01/10', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2024-11-12', installment: 'Frequente', status: 'Pago' },
    { description: 'Água 08/2024', type: 'Pagar', value: 197.88, date: '2024-11-20', installment: 'Frequente', status: 'Pago' },
    { description: 'Aluguel', type: 'Pagar', value: 1320.00, date: '2024-11-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2024-11-29', installment: 'Frequente', status: 'Pago' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 233.05, date: '2024-11-16', installment: '8/53', status: 'Pago' },
    { description: 'Água Cachoeira', type: 'Pagar', value: 44.67, date: '2024-12-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Móveis Jufap', type: 'Pagar', value: 250.00, date: '2024-12-05', installment: '3/6', status: 'Pago' },
    { description: 'Luz Jenifer', type: 'Pagar', value: 387.00, date: '2024-12-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Well', type: 'Pagar', value: 20.00, date: '2024-12-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Água Colombo 20/09', type: 'Pagar', value: 198.99, date: '2024-12-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Água Colombo 20/10', type: 'Pagar', value: 167.71, date: '2024-12-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Água Colombo 20/11', type: 'Pagar', value: 120.78, date: '2024-12-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Multa Moto', type: 'Pagar', value: 234.78, date: '2024-12-05', installment: 'Frequente', status: 'Pendente' },
    { description: 'Multa HR-V', type: 'Pagar', value: 262.92, date: '2024-12-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Móvel Marcelo', type: 'Pagar', value: 44.99, date: '2024-12-06', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Móvel Day', type: 'Pagar', value: 44.99, date: '2024-12-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet Cachoeira', type: 'Pagar', value: 110.00, date: '2024-12-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz Cachoeira', type: 'Pagar', value: 61.47, date: '2024-12-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2024-12-07', installment: '02/10', status: 'Pago' },
    { description: 'Youtube Premium', type: 'Pagar', value: 41.90, date: '2024-12-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2024-12-08', installment: '1/10', status: 'Pago' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2024-12-08', installment: '9/18', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 316.33, date: '2024-12-08', installment: '9/51', status: 'Pago' },
    { description: 'Sofá Armário', type: 'Pagar', value: 552.00, date: '2024-12-08', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet Colombo', type: 'Pagar', value: 99.90, date: '2024-12-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Van Kim', type: 'Pagar', value: 200.00, date: '2024-12-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Aluguel', type: 'Pagar', value: 1320.00, date: '2024-12-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Amazon Prime Vídeo Anual', type: 'Pagar', value: 166.80, date: '2024-12-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2024-12-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2024-12-12', installment: 'Frequente', status: 'Pago' },
    { description: 'Pegar Certidão Divórcio', type: 'Pagar', value: 70.00, date: '2024-12-15', installment: 'Frequente', status: 'Pago' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 230.42, date: '2024-12-16', installment: '9/53', status: 'Pago' },
    { description: 'Acordo Inter', type: 'Pagar', value: 160.00, date: '2024-12-19', installment: '1/3', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2024-12-29', installment: 'Frequente', status: 'Pago' },
    { description: 'Rafa', type: 'Pagar', value: 154.00, date: '2025-01-01', installment: 'Frequente', status: 'Pago' },
    { description: 'Água', type: 'Pagar', value: 43.73, date: '2025-01-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Móveis Jufap', type: 'Pagar', value: 250.00, date: '2025-01-05', installment: '4/6', status: 'Pago' },
    { description: 'Claro Móvel Marcelo', type: 'Pagar', value: 44.99, date: '2025-01-06', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 118.03, date: '2025-01-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-01-07', installment: '03/10', status: 'Pago' },
    { description: 'Youtube Premium', type: 'Pagar', value: 41.90, date: '2025-01-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet Cachoeira', type: 'Pagar', value: 110.00, date: '2025-01-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-01-08', installment: '2/10', status: 'Pago' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-01-08', installment: '10/18', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 316.15, date: '2025-01-08', installment: '10/51', status: 'Pago' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-01-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-01-12', installment: 'Frequente', status: 'Pago' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 230.15, date: '2025-01-16', installment: '10/53', status: 'Pago' },
    { description: 'Acordo Inter', type: 'Pagar', value: 160.00, date: '2025-01-19', installment: '2/3', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-01-29', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Móvel Day', type: 'Pagar', value: 44.99, date: '2025-01-31', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Móvel Chris', type: 'Pagar', value: 44.99, date: '2025-01-31', installment: 'Frequente', status: 'Pago' },
    { description: 'Água', type: 'Pagar', value: 31.75, date: '2025-02-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Crhis', type: 'Pagar', value: 44.99, date: '2025-02-03', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-02-03', installment: 'Frequente', status: 'Pago' },
    { description: 'Móveis Jufap', type: 'Pagar', value: 250.00, date: '2025-02-05', installment: '5/6', status: 'Pago' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-02-06', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 202.65, date: '2025-02-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-02-07', installment: '03/10', status: 'Pago' },
    { description: 'Youtube Premium', type: 'Pagar', value: 41.90, date: '2025-02-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet', type: 'Pagar', value: 110.00, date: '2025-02-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-02-08', installment: '3/10', status: 'Pago' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-02-08', installment: '11/18', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 315.96, date: '2025-02-08', installment: '11/51', status: 'Pago' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-02-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-02-12', installment: 'Frequente', status: 'Pago' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 235.42, date: '2025-02-16', installment: '11/53', status: 'Pago' },
    { description: 'Acordo Inter', type: 'Pagar', value: 160.00, date: '2025-02-19', installment: '3/3', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-02-28', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Chris', type: 'Pagar', value: 300.00, date: '2025-02-01', installment: 'Frequente', status: 'Pago' },
    { description: 'Uniforme Chris', type: 'Pagar', value: 43.90, date: '2025-02-01', installment: 'Frequente', status: 'Pago' },
    { description: 'Uniforme Kim', type: 'Pagar', value: 25.99, date: '2025-02-01', installment: 'Frequente', status: 'Pago' },
    { description: 'PGFN', type: 'Pagar', value: 37.71, date: '2025-02-28', installment: '2/28', status: 'Pago' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-02-28', installment: '2/31', status: 'Pago' },
    { description: 'Água', type: 'Pagar', value: 32.30, date: '2025-03-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Móveis Jufap', type: 'Pagar', value: 250.00, date: '2025-03-05', installment: '6/6', status: 'Pago' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 54.99, date: '2025-03-13', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 211.74, date: '2025-03-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-03-07', installment: '04/10', status: 'Pago' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-03-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Chris', type: 'Pagar', value: 34.99, date: '2025-03-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Youtube Premium', type: 'Pagar', value: 41.90, date: '2025-03-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet', type: 'Pagar', value: 110.00, date: '2025-03-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Carro', type: 'Pagar', value: 700.00, date: '2025-03-08', installment: '1/23', status: 'Pago' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-03-08', installment: '4/10', status: 'Pago' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-03-08', installment: '12/18', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 315.78, date: '2025-03-08', installment: '12/51', status: 'Pago' },
    { description: 'Futebol', type: 'Pagar', value: 50.00, date: '2025-03-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-03-12', installment: 'Frequente', status: 'Pago' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 235.33, date: '2025-03-16', installment: '12/53', status: 'Pago' },
    { description: 'IPVA Moto 2025', type: 'Pagar', value: 550.82, date: '2025-03-16', installment: 'Frequente', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-03-29', installment: 'Frequente', status: 'Pago' },
    { description: 'CRTR', type: 'Pagar', value: 373.85, date: '2025-03-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Kim Tio Robson', type: 'Pagar', value: 400.00, date: '2025-03-01', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Chris Tio Cleberson', type: 'Pagar', value: 300.00, date: '2025-03-01', installment: 'Frequente', status: 'Pago' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-03-31', installment: '3/28', status: 'Pago' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-03-31', installment: '3/31', status: 'Pago' },
    { description: 'Aliexpress', type: 'Pagar', value: 23.74, date: '2025-03-26', installment: 'Frequente', status: 'Pago' },
    { description: 'Água', type: 'Pagar', value: 49.05, date: '2025-04-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 54.99, date: '2025-04-06', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 241.59, date: '2025-04-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-04-07', installment: '05/10', status: 'Pago' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 54.99, date: '2025-04-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Chris', type: 'Pagar', value: 44.99, date: '2025-04-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Youtube Premium', type: 'Pagar', value: 41.90, date: '2025-04-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet', type: 'Pagar', value: 110.00, date: '2025-04-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Microsoft 365 Anuidade', type: 'Pagar', value: 0, date: '2025-04-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Carro', type: 'Pagar', value: 700.00, date: '2025-04-08', installment: '2/23', status: 'Pago' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-04-08', installment: '5/10', status: 'Pago' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-04-08', installment: '13/18', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 310.77, date: '2025-04-08', installment: '13/51', status: 'Pago' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-04-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2024-04-12', installment: 'Frequente', status: 'Pago' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 225.63, date: '2025-04-16', installment: '13/53', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-04-29', installment: 'Frequente', status: 'Pago' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-04-30', installment: '4/28', status: 'Pago' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-04-30', installment: '4/31', status: 'Pago' },
    { description: 'Van Kim Tio Robson', type: 'Pagar', value: 350.00, date: '2025-04-01', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Chris Tio Cleberson', type: 'Pagar', value: 300.00, date: '2025-04-01', installment: 'Frequente', status: 'Pago' },
    { description: 'Aliexpress Marcelo', type: 'Pagar', value: 23.74, date: '2025-04-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Aliexpress Marcelo', type: 'Pagar', value: 23.74, date: '2025-04-25', installment: 'Frequente', status: 'Pago' },
    { description: 'Academia Chris', type: 'Pagar', value: 155.00, date: '2025-04-04', installment: 'Frequente', status: 'Pago' },
    { description: 'Água', type: 'Pagar', value: 49.05, date: '2025-05-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Água', type: 'Pagar', value: 30.78, date: '2025-05-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Chris', type: 'Pagar', value: 30.00, date: '2025-05-05', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-05-06', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-05-07', installment: '06/10', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 241.59, date: '2025-05-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 252.95, date: '2025-05-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-05-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-05-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet', type: 'Pagar', value: 129.90, date: '2025-05-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Cartão Tio Edson Carro', type: 'Pagar', value: 700.00, date: '2025-05-08', installment: '3/23', status: 'Pago' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-05-08', installment: '6/10', status: 'Pago' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-05-08', installment: '14/18', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 317.64, date: '2025-05-08', installment: '13/51', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 315.59, date: '2025-05-08', installment: '14/51', status: 'Pago' },
    { description: 'Van Chris', type: 'Pagar', value: 300.00, date: '2025-05-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Kim', type: 'Pagar', value: 350.00, date: '2025-05-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-05-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-05-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-05-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 238.38, date: '2025-05-16', installment: '13/53', status: 'Pago' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 235.24, date: '2025-05-16', installment: '14/53', status: 'Pago' },
    { description: 'Gás', type: 'Pagar', value: 110.00, date: '2025-05-17', installment: 'Frequente', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-05-29', installment: 'Frequente', status: 'Pago' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-05-30', installment: '4/28', status: 'Pendente' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-05-30', installment: '5/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-05-30', installment: '4/31', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-05-30', installment: '5/31', status: 'Pendente' },
    { description: 'Água', type: 'Pagar', value: 57.14, date: '2025-06-02', installment: 'Frequente', status: 'Pago' },
    { description: 'Edmilson Pedreiro', type: 'Pagar', value: 330.00, date: '2025-06-03', installment: 'Frequente', status: 'Pago' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-06-06', installment: 'Frequente', status: 'Pago' },
    { description: 'Luz', type: 'Pagar', value: 171.70, date: '2025-06-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-06-07', installment: '07/10', status: 'Pago' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-06-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-06-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Internet', type: 'Pagar', value: 129.90, date: '2025-06-07', installment: 'Frequente', status: 'Pago' },
    { description: 'Cartão Tio Edson Óculos Chris', type: 'Pagar', value: 462.00, date: '2025-06-08', installment: '1/3', status: 'Pago' },
    { description: 'Cartão Tio Edson Carro', type: 'Pagar', value: 700.00, date: '2025-06-08', installment: '4/23', status: 'Pago' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-06-08', installment: '7/10', status: 'Pago' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-06-08', installment: '15/18', status: 'Pago' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 325.99, date: '2025-06-08', installment: '15/51', status: 'Pago' },
    { description: 'Academia Chris', type: 'Pagar', value: 155.00, date: '2025-06-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Van Kim e Chris', type: 'Pagar', value: 600.00, date: '2025-06-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Crédito Celular Kim', type: 'Pagar', value: 20.00, date: '2025-06-10', installment: 'Frequente', status: 'Pago' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-06-11', installment: 'Frequente', status: 'Pago' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-06-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 234.96, date: '2025-06-16', installment: '15/53', status: 'Pago' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-06-29', installment: 'Frequente', status: 'Pago' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-06-30', installment: '6/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-06-30', installment: '6/31', status: 'Pendente' },
    { description: 'Água', type: 'Pagar', value: 0, date: '2025-07-02', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-07-06', installment: 'Frequente', status: 'Pendente' },
    { description: 'Luz', type: 'Pagar', value: 0, date: '2025-07-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-07-07', installment: '08/10', status: 'Pendente' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-07-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-07-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Internet', type: 'Pagar', value: 129.90, date: '2025-07-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Cartão Tio Edson Carro', type: 'Pagar', value: 700.00, date: '2025-07-08', installment: '5/23', status: 'Pendente' },
    { description: 'Cartão Tio Edson Óculos Chris', type: 'Pagar', value: 462.00, date: '2025-07-08', installment: '2/3', status: 'Pendente' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-07-08', installment: '8/10', status: 'Pendente' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-07-08', installment: '16/18', status: 'Pendente' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 325.99, date: '2025-07-08', installment: '16/51', status: 'Pendente' },
    { description: 'Academia Chris', type: 'Pagar', value: 155.00, date: '2025-07-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Van Kim e Chris', type: 'Pagar', value: 600.00, date: '2025-07-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-07-11', installment: 'Frequente', status: 'Pendente' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-07-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 234.96, date: '2025-07-16', installment: '16/53', status: 'Pendente' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-07-29', installment: 'Frequente', status: 'Pendente' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-07-31', installment: '7/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-07-31', installment: '7/31', status: 'Pendente' },
    { description: 'Água', type: 'Pagar', value: 0, date: '2025-08-02', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-08-06', installment: 'Frequente', status: 'Pendente' },
    { description: 'Luz', type: 'Pagar', value: 0, date: '2025-08-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-08-07', installment: '09/10', status: 'Pendente' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-08-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-08-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Internet', type: 'Pagar', value: 129.90, date: '2025-08-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Cartão Tio Edson Carro', type: 'Pagar', value: 700.00, date: '2025-08-08', installment: '6/23', status: 'Pendente' },
    { description: 'Cartão Tio Edson Óculos Chris', type: 'Pagar', value: 462.00, date: '2025-08-08', installment: '3/3', status: 'Pendente' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-08-08', installment: '9/10', status: 'Pendente' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-08-08', installment: '17/18', status: 'Pendente' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 325.99, date: '2025-08-08', installment: '17/51', status: 'Pendente' },
    { description: 'Academia Chris', type: 'Pagar', value: 155.00, date: '2025-08-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Van Kim e Chris', type: 'Pagar', value: 600.00, date: '2025-08-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-08-11', installment: 'Frequente', status: 'Pendente' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-08-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 234.96, date: '2025-08-16', installment: '17/53', status: 'Pendente' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-08-29', installment: 'Frequente', status: 'Pendente' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-08-29', installment: '8/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-08-29', installment: '8/31', status: 'Pendente' },
    { description: 'Água', type: 'Pagar', value: 0, date: '2025-09-02', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-09-06', installment: 'Frequente', status: 'Pendente' },
    { description: 'Luz', type: 'Pagar', value: 0, date: '2025-09-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Pensão', type: 'Pagar', value: 400.00, date: '2025-09-07', installment: '10/10', status: 'Pendente' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-09-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-09-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Internet', type: 'Pagar', value: 129.90, date: '2025-09-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Cartão Tio Edson Carro', type: 'Pagar', value: 700.00, date: '2025-09-08', installment: '7/23', status: 'Pendente' },
    { description: 'Cartão Tio Edson Móveis', type: 'Pagar', value: 552.00, date: '2025-09-08', installment: '10/10', status: 'Pendente' },
    { description: 'Cartão Tio Edson Moto', type: 'Pagar', value: 416.40, date: '2025-09-08', installment: '18/18', status: 'Pendente' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 325.99, date: '2025-09-08', installment: '18/51', status: 'Pendente' },
    { description: 'Academia Chris', type: 'Pagar', value: 155.00, date: '2025-09-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Van Kim e Chris', type: 'Pagar', value: 600.00, date: '2025-09-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Crédito Celular Kim', type: 'Pagar', value: 20.00, date: '2025-09-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-09-11', installment: 'Frequente', status: 'Pendente' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-09-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 234.96, date: '2025-09-16', installment: '18/53', status: 'Pendente' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-09-29', installment: 'Frequente', status: 'Pendente' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-09-30', installment: '9/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-09-30', installment: '9/31', status: 'Pendente' },
    { description: 'Água', type: 'Pagar', value: 0, date: '2025-10-02', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-10-06', installment: 'Frequente', status: 'Pendente' },
    { description: 'Luz', type: 'Pagar', value: 0, date: '2025-10-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-10-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-10-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Internet', type: 'Pagar', value: 110.00, date: '2025-10-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 325.99, date: '2025-10-08', installment: '19/51', status: 'Pendente' },
    { description: 'Van Kim e Chris', type: 'Pagar', value: 600.00, date: '2025-10-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-10-11', installment: 'Frequente', status: 'Pendente' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-10-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 234.96, date: '2025-10-16', installment: '19/53', status: 'Pendente' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-10-29', installment: 'Frequente', status: 'Pendente' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-10-31', installment: '10/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-10-31', installment: '10/31', status: 'Pendente' },
    { description: 'Preventivo Day', type: 'Pagar', value: 0, date: '2025-10-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Água', type: 'Pagar', value: 0, date: '2025-11-02', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-11-06', installment: 'Frequente', status: 'Pendente' },
    { description: 'Luz', type: 'Pagar', value: 0, date: '2025-11-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-11-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-11-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Internet', type: 'Pagar', value: 110.00, date: '2025-11-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 325.99, date: '2025-11-08', installment: '20/51', status: 'Pendente' },
    { description: 'Van Kim e Chris', type: 'Pagar', value: 600.00, date: '2025-11-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-11-11', installment: 'Frequente', status: 'Pendente' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-11-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 234.96, date: '2025-11-16', installment: '20/53', status: 'Pendente' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-11-29', installment: 'Frequente', status: 'Pendente' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-11-28', installment: '11/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-11-28', installment: '11/31', status: 'Pendente' },
    { description: 'Água', type: 'Pagar', value: 0, date: '2025-12-02', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Marcelo', type: 'Pagar', value: 44.99, date: '2025-12-06', installment: 'Frequente', status: 'Pendente' },
    { description: 'Amazon Prime Anuidade', type: 'Pagar', value: 166.80, date: '2025-12-06', installment: 'Frequente', status: 'Pendente' },
    { description: 'Luz', type: 'Pagar', value: 0, date: '2025-12-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Claro Flex Day', type: 'Pagar', value: 44.99, date: '2025-12-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Youtube Premium', type: 'Pagar', value: 53.90, date: '2025-12-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Internet', type: 'Pagar', value: 129.90, date: '2025-12-07', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3110 Moto', type: 'Pagar', value: 325.99, date: '2025-12-08', installment: '21/51', status: 'Pendente' },
    { description: 'Van Kim e Chris', type: 'Pagar', value: 600.00, date: '2025-12-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Crédito Celular Kim', type: 'Pagar', value: 0, date: '2025-12-10', installment: 'Frequente', status: 'Pendente' },
    { description: 'Futebol', type: 'Pagar', value: 40.00, date: '2025-12-11', installment: 'Frequente', status: 'Pendente' },
    { description: 'Sulamérica Odonto', type: 'Pagar', value: 82.62, date: '2025-12-12', installment: 'Frequente', status: 'Pendente' },
    { description: 'Consórcio3111 Moto', type: 'Pagar', value: 234.96, date: '2025-12-16', installment: '21/53', status: 'Pendente' },
    { description: 'Max', type: 'Pagar', value: 19.95, date: '2025-12-29', installment: 'Frequente', status: 'Pendente' },
    { description: 'PGFN', type: 'Pagar', value: 25.75, date: '2025-12-30', installment: '12/28', status: 'Pendente' },
    { description: 'Parcelamento Simei', type: 'Pagar', value: 51.08, date: '2025-12-30', installment: '12/31', status: 'Pendente' }
];
                
                const batch = writeBatch(db);
                historicalData.forEach(account => {
                    const dataToSet = { ...account };
                    if (dataToSet.installment === '') {
                        dataToSet.installment = 'Frequente';
                    }
                    const docRef = doc(accountsCollection);
                    batch.set(docRef, { ...dataToSet, createdAt: serverTimestamp() });
                });

                try {
                    await batch.commit();
                    alert(`Sucesso! ${historicalData.length} contas foram importadas para a sua planilha.`);
                    importButton.remove();
                } catch (error) {
                    console.error("Erro ao importar dados históricos:", error);
                    alert('Ocorreu um erro ao importar os dados. Verifique o console para mais detalhes.');
                    importButton.textContent = 'Tentar Importar Novamente';
                    importButton.disabled = false;
                }
            });
            mainContainer.prepend(importButton);
        }
        
        function initializeAppAndConnect() {
            if (typeof firebaseConfig === 'undefined') { showError("ERRO: A configuração do Firebase (arquivo config.js) não foi encontrada."); return; }
            try {
                const app = initializeApp(firebaseConfig);
                db = getFirestore(app);
                const auth = getAuth(app);
                setLogLevel('error');
                handleAuthentication(auth);
            } catch (error) {
                console.error("Firebase initialization failed:", error);
                showError("Falha ao iniciar o Firebase. Verifique a sua configuração.");
            }
        }
        
        function handleAuthentication(auth) {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    userIdDisplay.textContent = `Conectado (ID: ${user.uid.substring(0, 6)}...)`;
                    accountsCollection = collection(db, 'contas', user.uid, 'items');
                    listenForAccountChanges();
                } else {
                    userIdDisplay.textContent = "Autenticando...";
                    try { await signInAnonymously(auth); } catch (error) { console.error("Authentication failed:", error); userIdDisplay.textContent = "Falha na autenticação."; }
                }
            });
        }
        
        function listenForAccountChanges() {
            if (unsubscribe) unsubscribe();
            unsubscribe = onSnapshot(accountsCollection, (snapshot) => {
                if (snapshot.empty) {
                    showEmptyMessage();
                    createAndInjectImportButton(); 
                } else {
                    const importButton = document.getElementById('import-button');
                    if (importButton) importButton.remove();
                    allAccounts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    renderFilteredAccounts();
                }
            }, (error) => {
                console.error("Error fetching collection:", error);
                showError("Erro ao carregar os dados. Verifique o console e as regras de segurança do Firestore.");
            });
        }
        
        function renderFilteredAccounts() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredAccounts = allAccounts.filter(account => account.description.toLowerCase().includes(searchTerm));
            
            if (filteredAccounts.length === 0) {
                if (searchTerm) {
                    accountsTableBody.innerHTML = `<tr><td colspan="8" class="text-center text-gray-500 py-8">Nenhuma conta encontrada para "${searchInput.value}".</td></tr>`;
                } else {
                    showEmptyMessage();
                }
                updateDashboard([]);
                renderCategoryChart([]);
            } else {
                renderScreen(filteredAccounts);
            }
        }

        function renderScreen(accountsToRender) {
            accountsTableBody.innerHTML = '';
            const accountsByMonth = groupAccountsByMonth(accountsToRender);
            const sortedMonthKeys = Object.keys(accountsByMonth).sort((a, b) => new Date(b.split('/')[1], monthNames.indexOf(b.split('/')[0])) - new Date(a.split('/')[1], monthNames.indexOf(a.split('/')[0])));
            
            const now = new Date();
            const currentMonthKey = `${monthNames[now.getMonth()]}/${now.getFullYear()}`;
            
            if(!searchInput.value) {
                const currentMonthAccounts = accountsByMonth[currentMonthKey] || [];
                updateDashboard(currentMonthAccounts);
                renderCategoryChart(currentMonthAccounts);
            } else {
                updateDashboard([]);
                renderCategoryChart([]);
            }

            sortedMonthKeys.forEach(monthKey => {
                const monthAccounts = accountsByMonth[monthKey];
                const isCurrentMonth = monthKey === currentMonthKey;
                appendMonthSection(monthKey, monthAccounts, isCurrentMonth);
            });
        }

        function renderCategoryChart(accounts) {
            const ctx = document.getElementById('category-chart').getContext('2d');
            const expensesByCategory = accounts
                .filter(acc => acc.type === TIPO_PAGAR && acc.status !== STATUS_PENDENTE)
                .reduce((acc, current) => {
                    const category = current.category || 'Outros';
                    acc[category] = (acc[category] || 0) + current.value;
                    return acc;
                }, {});

            const labels = Object.keys(expensesByCategory);
            const data = Object.values(expensesByCategory);

            if (categoryChart) {
                categoryChart.destroy();
            }
            
            if(labels.length === 0) {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.font = "16px Inter";
                ctx.fillStyle = "#6b7280";
                ctx.textAlign = "center";
                ctx.fillText("Sem dados de gastos para exibir.", ctx.canvas.width / 2, ctx.canvas.height / 2);
                return;
            }

            categoryChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Gastos por Categoria',
                        data: data,
                        backgroundColor: ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7'],
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'top', },
                        title: { display: true, text: 'Distribuição de Gastos (Mês Atual)' }
                    }
                }
            });
        }

        function updateDashboard(accountsForCurrentMonth) {
            const totals = calculateMonthlyTotals(accountsForCurrentMonth);
            const balance = totals.receivedAmount - totals.paidAmount;
            const formatCurrency = (value) => `R$ ${value.toFixed(2).replace('.', ',')}`;
            document.getElementById('dashboard-to-receive').textContent = formatCurrency(totals.toReceive);
            document.getElementById('dashboard-to-pay').textContent = formatCurrency(totals.toPay);
            document.getElementById('dashboard-paid').textContent = formatCurrency(totals.receivedAmount);
            document.getElementById('dashboard-balance').textContent = formatCurrency(balance);
            const balanceElement = document.getElementById('dashboard-balance').parentElement;
            balanceElement.classList.remove('card-blue', 'card-red');
            if (balance < 0) { balanceElement.classList.add('card-red'); } else { balanceElement.classList.add('card-blue'); }
        }

        function createAccountRow(account) {
            const row = document.createElement('tr');
            const createCellWithChild = (child) => {
                const cell = row.insertCell();
                cell.appendChild(child);
            };
            createCellWithChild(createInputElement('text', account.description || '', 'Descrição', (e) => updateAccount(account.id, { description: e.target.value })));
            const categorySelectOptions = ['Selecionar...', ...CATEGORIES];
            const selectedCategory = account.category && CATEGORIES.includes(account.category) ? account.category : 'Selecionar...';
            const categorySelect = createSelectElement(categorySelectOptions, selectedCategory, (e) => updateAccount(account.id, { category: e.target.value }));
            createCellWithChild(categorySelect);
            const typeSelect = createSelectElement([TIPO_PAGAR, TIPO_RECEBER], account.type, (e) => updateAccount(account.id, { type: e.target.value }));
            createCellWithChild(typeSelect);
            createCellWithChild(createInputElement('number', (account.value || 0).toFixed(2), 'Valor', (e) => updateAccount(account.id, { value: parseFloat(e.target.value) || 0 })));
            createCellWithChild(createInputElement('date', account.date || '', null, (e) => updateAccount(account.id, { date: e.target.value })));
            createCellWithChild(createInputElement('text', account.installment || '', 'Ex: 1/12', (e) => updateAccount(account.id, { installment: e.target.value })));
            const statusSelect = createSelectElement([STATUS_PENDENTE, STATUS_PAGO, STATUS_RECEBIDO], account.status, (e) => updateAccount(account.id, { status: e.target.value }));
            statusSelect.classList.add('status-select');
            applyStatusClass(statusSelect, account.status);
            statusSelect.addEventListener('change', (e) => {
                applyStatusClass(e.target, e.target.value);
                updateAccount(account.id, { status: e.target.value });
            });
            createCellWithChild(statusSelect);
            const actionsCell = row.insertCell();
            actionsCell.classList.add('flex', 'flex-row', 'gap-2', 'items-center', 'justify-center');
            actionsCell.appendChild(createDeleteButton(() => deleteAccount(account.id)));
            return row;
        }
        
        function applyStatusClass(element, status) {
            element.classList.remove(`status-${STATUS_PENDENTE}`, `status-${STATUS_PAGO}`, `status-${STATUS_RECEBIDO}`);
            if (status) { element.classList.add(`status-${status}`); }
        }
        function createInputElement(type, value, placeholder, changeHandler) {
            const input = document.createElement('input');
            input.type = type;
            input.value = value;
            if (placeholder) input.placeholder = placeholder;
            if (type === 'number') input.step = '0.01';
            input.addEventListener('change', changeHandler);
            return input;
        }
        function createSelectElement(options, selectedValue, changeHandler) {
            const select = document.createElement('select');
            select.innerHTML = options.map(opt => `<option value="${opt}" ${selectedValue === opt ? 'selected' : ''}>${opt}</option>`).join('');
            select.addEventListener('change', changeHandler);
            return select;
        }
        function createDeleteButton(onClick) {
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '&times;';
            deleteButton.title = 'Excluir conta';
            deleteButton.classList.add('btn-delete-custom');
            deleteButton.addEventListener('click', onClick);
            return deleteButton;
        }
        function groupAccountsByMonth(accounts) {
            const grouped = {};
            accounts.forEach(account => {
                if (account.date) {
                    const dateObj = new Date(account.date + 'T00:00:00');
                    const monthYearKey = `${monthNames[dateObj.getMonth()]}/${dateObj.getFullYear()}`;
                    if (!grouped[monthYearKey]) grouped[monthYearKey] = [];
                    grouped[monthYearKey].push(account);
                }
            });
            return grouped;
        }
        function appendMonthSection(monthKey, monthAccounts, isCurrentMonth) {
            const contentRowsClassName = `content-${monthKey.replace(/[^a-zA-Z0-9]/g, '-')}`;
            const monthlyTotals = calculateMonthlyTotals(monthAccounts);
            const headerRow = accountsTableBody.insertRow();
            headerRow.className = 'month-separator-row';
            if(isCurrentMonth) headerRow.classList.add('current-month-header');
            if(monthlyTotals.allPaid) headerRow.classList.add('month-paid-header');
            if(!isCurrentMonth) headerRow.classList.add('collapsed');
            const headerCell = headerRow.insertCell();
            headerCell.colSpan = 8;
            headerCell.innerHTML = `${monthKey} <span class="toggle-icon">▼</span>`;
            monthAccounts.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(account => {
                const row = createAccountRow(account);
                row.className = `${contentRowsClassName} ${!isCurrentMonth ? 'hidden-row' : ''}`;
                accountsTableBody.appendChild(row);
            });
            const totalsRow = createTotalsRow(monthKey, monthAccounts);
            totalsRow.className = `${contentRowsClassName} ${!isCurrentMonth ? 'hidden-row' : ''}`;
            accountsTableBody.appendChild(totalsRow);
            headerRow.addEventListener('click', (e) => {
                e.currentTarget.classList.toggle('collapsed');
                document.querySelectorAll(`.${contentRowsClassName}`).forEach(row => {
                    row.classList.toggle('hidden-row');
                });
            });
        }
        function createTotalsRow(monthKey, monthAccounts) {
            const totalsRow = document.createElement('tr');
            totalsRow.className = 'monthly-totals-row';
            const totalsCell = totalsRow.insertCell();
            totalsCell.colSpan = 8;
            const flexContainer = document.createElement('div');
            flexContainer.className = 'flex-container flex flex-row justify-between items-center w-full p-1 flex-wrap';
            const totalsTextContainer = document.createElement('div');
            totalsTextContainer.className = 'totals-text text-xs md:text-sm';
            const monthlyTotals = calculateMonthlyTotals(monthAccounts);
            totalsTextContainer.innerHTML = `
                <div><strong>Pendentes:</strong> A Pagar <span class="text-red-600">R$ ${monthlyTotals.toPay.toFixed(2).replace('.', ',')}</span></div>
                <div><strong>Quitados:</strong> Pago <span class="text-green-700">R$ ${monthlyTotals.paidAmount.toFixed(2).replace('.', ',')}</span> | Recebido <span class="text-yellow-600">R$ ${monthlyTotals.receivedAmount.toFixed(2).replace('.', ',')}</span></div>
            `;
            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'buttons-container flex gap-2';
            const addBtn = document.createElement('button');
            addBtn.textContent = 'Adicionar Conta';
            addBtn.className = 'btn btn-primary';
            addBtn.addEventListener('click', openModal);
            buttonsContainer.appendChild(addBtn);
            flexContainer.appendChild(totalsTextContainer);
            flexContainer.appendChild(buttonsContainer);
            totalsCell.appendChild(flexContainer);
            return totalsRow;
        }
        function calculateMonthlyTotals(accountsList) {
            const totals = { toPay: 0, toReceive: 0, paidAmount: 0, receivedAmount: 0, pendingCount: 0 };
            accountsList.forEach(account => {
                const value = account.value || 0;
                switch(account.status) {
                    case STATUS_PENDENTE:
                        totals.pendingCount++;
                        if (account.type === TIPO_PAGAR) totals.toPay += value;
                        else if (account.type === TIPO_RECEBER) totals.toReceive += value;
                        break;
                    case STATUS_PAGO:
                        totals.paidAmount += value;
                        break;
                    case STATUS_RECEBIDO:
                        totals.receivedAmount += value;
                        break;
                }
            });
            totals.allPaid = totals.pendingCount === 0 && accountsList.length > 0;
            return totals;
        }
        function showError(message) {
            accountsTableBody.innerHTML = `<tr><td colspan="8" class="text-center text-red-600 font-bold p-4">${message}</td></tr>`;
        }
        function showEmptyMessage() {
            accountsTableBody.innerHTML = `<tr><td colspan="8" class="text-center text-gray-500 py-8">Nenhuma conta encontrada. Adicione uma para começar.</td></tr>`;
            const firstAddRow = accountsTableBody.insertRow();
            const cell = firstAddRow.insertCell();
            cell.colSpan = 8;
            cell.classList.add('text-center', 'py-4');
            const addBtn = document.createElement('button');
            addBtn.textContent = 'Adicionar Primeira Conta';
            addBtn.classList.add('btn', 'btn-primary');
            addBtn.addEventListener('click', openModal);
            cell.appendChild(addBtn);
        }
        async function addAccount(accountData) {
            if (!accountsCollection) return;
            try {
                const dataToSave = { ...accountData };
                if (dataToSave.installment === '') {
                    dataToSave.installment = 'Frequente';
                }
                await addDoc(accountsCollection, { ...dataToSave, createdAt: serverTimestamp() });
            } catch (error) {
                console.error("Error adding account: ", error);
            }
        }
        async function updateAccount(docId, dataToUpdate) {
            if (!accountsCollection) return;
            const accountDocRef = doc(accountsCollection, docId);
            try {
                await updateDoc(accountDocRef, dataToUpdate);
            } catch (error) {
                console.error("Error updating account: ", error);
            }
        }
        async function deleteAccount(docId) {
            if (!accountsCollection || !confirm('Tem certeza de que quer apagar esta conta?')) return;
            const accountDocRef = doc(accountsCollection, docId);
            try {
                await deleteDoc(accountDocRef);
            } catch (error) {
                console.error("Error deleting account: ", error);
            }
        }
        initializeAppAndConnect();
    </script>
</body>
</html>