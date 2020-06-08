const express = require('express');
const parser = require('body-parser');
const cors = require('cors')

var api = express();
api.use(parser.json(), cors());

const port = 8001;

api.get('/bpop-ahorro-core/catalog/branchId',(_,res)=> {
    res.status(200);
    const data = {
        catalog: [
            {
              id: 2153,
              name: 'BranchId',
              key: 'ACACIAS',
              value: '411',
              description: 'ACACIAS'
            },
            {
              id: 2156,
              name: 'BranchId',
              key: 'AGUA DE DIOS',
              value: '61',
              description: 'AGUA DE DIOS'
            }
        ]
     };
    res.send(data)
});

api.post('/bpop-ahorro-core/authenticate/login',(req,res)=> {
    res.status(200);
    res.append('X-Adl-Adviser-Id', req.body.identification)
    res.append('X-Adl-Adviser-Office', req.body.office)
    const user = {
        identification: req.body.identification,
        office: req.body.office,
        name: 'Usuario',
        role: 'CUSTOMER', // 'ADVISER' 'DEMO' 'SUPPORT'
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNjU0MDM5NCIsInJvbGVzIjpbeyJpZCI6IjMiLCJyb2xlIjoiQ1VTVE9NRVIifV0sImV4cCI6MTU4OTk5MjI4OCwiaWF0IjoxNTg5OTg4Njg4fQ.LUoCxSLRmLU9OzHu4ptnY_mQnlD230D_rMTEmzPNHrE',
        status: 'true',
        code: '200',
        message: 'Autenticación exitosa',
    };

    res.send(user)
});

api.post('/bpop-ahorro-core/calendar/validateDate',(_,res)=> {
    res.status(200);
    const data = {
        detail: 'HORARIO NO LABORAL',
        status: 'true'
    };
    res.send(data)
});

api.post('/bpop-ahorro-core/authenticate/validateNut',(_,res)=> {
    res.status(200);
    res.send(false);
});

api.post('/bpop-ahorro-core/authenticate/validate',(req,res)=> {
    res.status(200);
    const data = {
        identification: req.body.customerIdentification,
        secondLastName: req.body.secondLastName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        name: req.body.name,
        phone: req.body.phone,
        allowed: true,
        transactionId: 'aaaaa13',
    };
    res.send(data);
});

api.post('/bpop-ahorro-core/customer/saveAuthsHabeasData',(_,res)=> {
    res.status(200);
    const data = { status: 'true', detail: 'save'};
    res.send(data);
});

api.post('/bpop-ahorro-core/customer/retrieve',(req,res)=> {
    res.status(200);
    const data = {
        status: 'true',
        identification: req.body.idCustomer,
        secondLastName: 'Anez',
        lastName: 'Orozco',
        middleName: 'Andrea',
        name: 'Monica',
        phone: '31111111',
        phoneNumber: '31111111',
        birthday: -940636800,
        idIssueDate: Date.apply('Wed Jul 31 15:23:27 GMT 2019'),
        idIssueLocation: '11001',
        birthLocation: '11001',
        idType: 'CC',
        gender: '002',
        civilStatus: '002',
        economicActivity: '001',
        activity: '002',
        educationalLevel: '002',
        profession: '002',
        idProcess: null,
        housingType: '001',
        locationAddressType: '001',
        locationAddress: 'ACC-80 Nro. -90-76',
        locationCity: 'bogota',
        locationDepartament: '11',
        workLocation: 'AV E-80-90-76',
        workLocationDetail: 'Apto 5',
        workingCity: '11001',
        workDepartment: '11',
        workPhone: '1214161',
        workExperience: '30',
        email: 'email@dominio.com',
        emailType: '001',
        assetsValue: 25000000,
        incomeValue: 10000000,
        expensesValue: 1250000,
        liabilitiesValue: 10500000,
        incomeOriginType: '001',
        cityName: 'BOGOTÁ, D.C.',
        professionName: 'ADMINISTRACION DE EMPRESAS',
        econoActivityName: 'EDICIÓN DE PROGRAMAS DE INFORMÁTICA (SOFTWARE)',
        'transactionId': req.body.transactionId,
        adressDetail: 'Apto 9',
        mobileNumber: '3234567890',
      };
    res.send(data);
});

api.post('/bpop-ahorro-core/customer/saveProfile',(_,res)=> {
    res.status(200);
    const data = { status: 'true', detail: 'save'};
    res.send(data);
});

api.post('/bpop-ahorro-core/customer/saveAuthsTerms',(_,res)=> {
    res.status(200);
    const data = { status: 'true', detail: 'save'};
    res.send(data);
});

api.post('/bpop-ahorro-core/account/save',(_,res)=> {
    res.status(200);
    const data = { status: 'true', detail: 'save'};
    res.send(data);
});

api.get('/bpop-ahorro-core/catalog/getAgreements/:type',(req,res)=> {
    res.status(200);
    switch (req.params.type) {
        case '581':
            agreemData = [
            {
                code: '001',
                name: 'Otras entidades oficiales',
                text: null,
                reference: '001',
            },
            {
                code: '002',
                name: 'Sector Educativo',
                text: null,
                reference: '001',
            },
            {
                code: '006',
                name: 'Aservit y CIA Funcionarios Banco Popular',
                text: null,
                reference: '001',
            },
            { code: '007', name: 'Mindefensa', text: null, reference: '001' },
            ];
            break;
        case '582':
            agreemData = [
            { code: '010', name: 'Compensar', text: null, reference: '001' },
            {
                code: '015',
                name: 'Cooperativa Trabajo Asociado',
                text: null,
                reference: '001',
            },
            { code: '020', name: 'Conal', text: null, reference: '001' },
            { code: '037', name: 'Corbic', text: null, reference: '001' },
            { code: '5896', name: 'COLPENSIONES', text: null, reference: '001' },
            ];
            break;
        default:
            agreemData = [
            { code: '019', name: 'Cuenta Ahorrar', text: null, reference: '003' },
            ];
            break;
    }
    res.send(agreemData);
});

api.get('/bpop-ahorro-core/catalog/getBenefitsByAgreement/:benefitId',(req,res)=> {
    res.status(200);
    let agreeById = {
        code: '001',
        name: null,
        text: [
            'Gratis retiros ilimitados en cajeros automáticos de la Red Aval.',
            'Gratis cuota de manejo y administración.',
            'Gratis transferencias entre los Banco AVAL (Banco Popular, Villas, Occidente y Bogotá)',
            'Gratis dos (2) transferencias ACH por Banca Móvil y Portal Web',
            'Gratis consultas de saldos por Banca Móvil y el portal de internet',
        ],
        reference: null,
    };
    if (req.params.benefitId === '002') {
        agreeById = {
            code: '002',
            name: null,
            text: [
                '$10900 cuota de manejo y administración.',
                'Gratis transferencias entre los Banco AVAL (Banco Popular, Villas, Occidente y Bogotá)',
                'Gratis dos (2) transferencias ACH por Banca Móvil y Portal Web',
            ],
            reference: null,
        };
    }
    if (req.params.benefitId === '003') {
        agreeById = {
            code: '003',
            name: null,
            text: [
                'Gratis transferencias entre los Banco AVAL (Banco Popular, Villas, Occidente y Bogotá)',
                'Gratis dos (2) transferencias ACH por Banca Móvil y Portal Web',
            ],
            reference: null,
        };
    }
    res.send(agreeById);
});

api.post('/bpop-ahorro-core/catalog/getCivilStatus',(_,res)=> {
    res.status(200);
    const data = [
        { code: '001', name: 'Casado', text: null, reference: null },
        { code: '002', name: 'Soltero', text: null, reference: null },
        { code: '004', name: 'Separado', text: null, reference: null },
    ];
    res.send(data);
});

api.get('/bpop-ahorro-core/catalog/PersonalDataMaritalStatus',(_,res)=> {
    res.status(200);
    let civilArray = {
        catalog: [
            {
                id: 21,
                name: "PersonalDataMaritalStatus",
                key: "Casado",
                value: "2",
                description: "Casado"
            },
            {
                id: 23,
                name: "PersonalDataMaritalStatus",
                key: "Divorciado",
                value: "4",
                description: "Divorciado"
            },
            {
                id: 18,
                name: "PersonalDataMaritalStatus",
                key: "NDCRM",
                value: "ND",
                description: "No disponible crm"
            },
            {
                id: 19,
                name: "PersonalDataMaritalStatus",
                key: "Otro",
                value: "0",
                description: "Otro"
            },
            {
                id: 22,
                name: "PersonalDataMaritalStatus",
                key: "Separado",
                value: "3",
                description: "Separado"
            },
            {
                id: 20,
                name: "PersonalDataMaritalStatus",
                key: "Soltero",
                value: "1",
                description: "Soltero"
            },
            {
                id: 25,
                name: "PersonalDataMaritalStatus",
                key: "U. Libre",
                value: "6",
                description: "Union Libre"
            },
            {
                id: 24,
                name: "PersonalDataMaritalStatus",
                key: "Viudo",
                value: "5",
                description: "Viudo"
            }
        ]
    };
    res.send(civilArray);
})

api.get('/bpop-ahorro-core/catalog/PersonalDataGender',(_,res)=> {
    res.status(200);
    let genderArray = {
        catalog: [
            {
                id: 26,
                name: "PersonalDataGender",
                key: "Femenino",
                value: "F",
                description: "Femenino"
            },
            {
                id: 27,
                name: "PersonalDataGender",
                key: "Masculino",
                value: "M",
                description: "Masculino"
            },
            {
                id: 28,
                name: "PersonalDataGender",
                key: "NDCRM",
                value: "N",
                description: "No disponible crm"
            }
        ]
    }
    res.send(genderArray);
})

api.get('/bpop-ahorro-core/catalog/getAllCities',(_,res)=> {
    res.status(200);
    const cityArray = [
        {
          id: 1,
          departmentCode: '11',
          departmentName: 'BOGOTÁ, D.C.',
          cityCode: '11001',
          cityName: 'BOGOTÁ, D.C.',
        },
        {
          id: 2,
          departmentCode: '05',
          departmentName: 'ANTIOQUIA',
          cityCode: '05001',
          cityName: 'MEDELLÍN',
        },
        {
          id: 3,
          departmentCode: '06',
          departmentName: 'CHÍA',
          cityCode: '06001',
          cityName: 'CHÍA',
        },
    ]
    res.send(cityArray);
});

api.get('/bpop-ahorro-core/catalog/getAllActivities',(_,res)=> {
    res.status(200);
    const occupation = [
        { code: '002', name: 'EMPLEADO', text: null, reference: null },
        { code: '003', name: 'INDEPENDIENTE', text: null, reference: null },
        { code: '005', name: 'PENSIONADO', text: null, reference: null },
    ]
    res.send(occupation);
});

api.get('/bpop-ahorro-core/catalog/getAllEducationalLevels',(_,res)=> {
    res.status(200);
    const educationalLevels = [
        { code: '001', name: 'Basico', text: null, reference: null },
        { code: '002', name: 'Profesional', text: null, reference: null },
        { code: '006', name: 'Ninguno', text: null, reference: null },
    ]
    res.send(educationalLevels);
});

api.get('/bpop-ahorro-core/catalog/getAllProfessions',(_,res)=> {
    res.status(200);
    const professions = [
        {
            code: '001',
            name: ' ACTUACION Y ESCRITURA DE GUIONES',
            text: null,
            reference: null,
          },
          { code: '064', name: ' BIOLOGIA', text: null, reference: null },
          {
            code: '089',
            name: ' COMERCIO INTERNACIONAL Y LEGISLACION ADUANERA',
            text: null,
            reference: null,
          },
          {
            code: '120',
            name: ' DISEÑO DE MEDIOS INTERACTIVOS',
            text: null,
            reference: null,
          },
          {
            code: '191',
            name: ' GERENCIA EN SISTEMAS DE INFORMACION EN SALUD',
            text: null,
            reference: null,
          },
    ]
    res.send(professions);
});

api.get('/bpop-ahorro-core/catalog/getAllEconomicActivites',(_,res)=> {
    res.status(200);
    const economicActivities = [
        {
            code: '001',
            name: 'ACABADO DE PRODUCTOS TEXTILES',
            text: null,
            reference: null,
            sarlaftRestrictive: 'false',
          },
          {
            code: '034',
            name: 'ACTIVIDADES DE CONTABILIDAD',
            text: null,
            reference: null,
            sarlaftRestrictive: 'false',
          },
          {
            code: '077',
            name: 'ACTIVIDADES DE TELECOMUNICACIONES ALÁMBRICAS',
            text: null,
            reference: null,
            sarlaftRestrictive: 'false',
          },
          {
            code: '224',
            name: 'EDUCACIÓN PREESCOLAR',
            text: null,
            reference: null,
            sarlaftRestrictive: 'false',
          },
          {
            code: '301',
            name: 'FABRICACIÓN DE EQUIPOS DE COMUNICACIÓN',
            text: null,
            reference: null,
            sarlaftRestrictive: 'false',
          },
    ]
    res.send(economicActivities);
});

api.get('/bpop-ahorro-core/catalog/getAddressPrefixValues',(_,res)=> {
    res.status(200);
    const prefix = [
        {
            id: 1,
            code: 'AC',
            status: '1',
            value: 'Avenida Calle',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
        {
            id: 2,
            code: 'KR',
            status: '1',
            value: 'Carrera',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
        {
            id: 3,
            code: 'CL',
            status: '1',
            value: 'Calle',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
        {
            id: 4,
            code: 'AV E',
            status: '1',
            value: 'Avenida Esperanza',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
    ]
    res.send(prefix);
});

api.get('/bpop-ahorro-core/catalog/getAddressPrefixValues',(_,res)=> {
    res.status(200);
    const prefix = [
        {
            id: 1,
            code: 'AC',
            status: '1',
            value: 'Avenida Calle',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
        {
            id: 2,
            code: 'KR',
            status: '1',
            value: 'Carrera',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
        {
            id: 3,
            code: 'CL',
            status: '1',
            value: 'Calle',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
        {
            id: 4,
            code: 'AV E',
            status: '1',
            value: 'Avenida Esperanza',
            type: 'PREFIX_ADDRESS',
            searchChain: null,
        },
    ]
    res.send(prefix);
});

api.get('/bpop-ahorro-core/catalog/getAddressSufixValues',(_,res)=> {
    res.status(200);
    const sufix = [
        {
            id: 45,
            code: 'BIS',
            status: '1',
            value: 'Bis',
            type: 'SUFIX_ADDRESS',
            searchChain: null,
        },
        {
            id: 46,
            code: 'A',
            status: '1',
            value: 'A',
            type: 'SUFIX_ADDRESS',
            searchChain: null,
        },
    ]
    res.send(sufix);
});

api.get('/bpop-ahorro-core/catalog/getDepartmentByCityCode/',(_,res)=> {
    res.status(200);
    const deptArray = [
        { code: '11', name: 'BOGOTÁ, D.C.', text: null, reference: null },
    ];
    res.send(deptArray);
});

api.post('/bpop-ahorro-core/authenticate/logout', (_,res)=> {
    res.status(200);
    res.send({ status: 'true', detail: 'OK sesion cerrada' });
});

api.post('/bpop-ahorro-core/customer/delete', (req,res)=> {
    res.status(200);
    res.send({ status: 'true', detail: req.body.id });
});

api.listen(port,() => console.log('Servidor escuchando en puerto ' + port));