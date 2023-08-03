import { scheduleJobs } from "../../src/utils/scheduleJobs";
import { calculateTotalHours } from "../../src/utils/calculateTotalHours";
import { Job } from "../../src/interfaces/Job";

describe('scheduleJobs function', () => {
    const jobs: Job[] = [
        {
            "ID": 1,
            "Descricao": "Importação de arquivos de fundos",
            "Data Máxima de conclusão": '2021-02-04 12:00:00',
            "Tempo estimado": '8 horas'
        },
        {
            "ID": 2,
            "Descricao": 'Importação de dados da Base Legada',
            "Data Máxima de conclusão": '2021-02-04 12:00:00',
            "Tempo estimado": '4 horas'
        },
        {
            "ID": 3,
            "Descricao": 'Importação de dados',
            "Data Máxima de conclusão": '2021-02-02 12:00:00',
            "Tempo estimado": '6 horas'
        },
        {
            "ID": 4,
            "Descricao": 'Desenvolver historia 745',
            "Data Máxima de conclusão": '2021-02-02 12:00:00',
            "Tempo estimado": '2 horas'
        },
        {
            "ID": 5,
            "Descricao": 'Gerar QRCode',
            "Data Máxima de conclusão": '2020-02-15 12:00:00',
            "Tempo estimado": '6 horas'
        },
        {
            "ID": 6,
            "Descricao": 'Importação de dados de integração',
            "Data Máxima de conclusão": '2020-02-15 12:00:00',
            "Tempo estimado": '8 horas'
        },
    ];

    test('schedules jobs within the given time range', () => {
        const maxHoursPerSchedule = 8;

        const schedules = scheduleJobs(jobs, maxHoursPerSchedule);

        expect(schedules.length).toBeGreaterThan(0);
        for (const schedule of schedules) {
            const totalHours = calculateTotalHours(schedule.jobs);
            expect(totalHours).toBeLessThanOrEqual(maxHoursPerSchedule);
        }
    });
});
