import { colors } from '@ignite-ui/tokens';
import { getContrast } from 'polished';

export function ColorsGrid() {
    return Object.entries(colors).map(([name, value]) => (
        <div
            key={name}
            style={{
                padding: '2rem',
                backgroundColor: value,
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', color: getContrast(value, '#FFF') < 3.5 ? '#000' : '#FFF'}}>
                <strong>${name}</strong>
                <span>{value}</span>
            </div>
        </div>
    ));
}