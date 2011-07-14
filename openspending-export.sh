#!/bin/bash                  

OUTPUT="nerc-os-export.csv"

echo "Writing export to ${OUTPUT}"
sqlite3 -header -csv nerc.db > "${OUTPUT}" <<EOQ

select 
d.name || ", " || i.name as 'recipient', 
g.ref as grant_reference,
g.value as value,
g.title as grant_title,
g.period_start as start_date,
g.period_end as end_date,
g.award_type as award_type,
p.name as program,
d.name || " (" || d.id || ")" as department,
i.name as institution,
r.name as region,
g.overall_classification as primary_classification

from research_grant as g
left join program as p on g.program_id = p.id
left join department as d on g.department_id = d.id 
left join institution as i on d.institution_id = i.id
left join region as r on i.region_id = r.id
where start_date is not null and end_date is not null
order by start_date asc;

EOQ
