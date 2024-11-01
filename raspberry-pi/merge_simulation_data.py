def merge_files(file1, file2, file3, file4, file5, file6, output_file):
    with open(file1, "r") as f1, open(file2, "r") as f2, open(file3, "r") as f3, open(
        file4, "r"
    ) as f4, open(file5, "r") as f5, open(file6, "r") as f6, open(
        output_file, "w"
    ) as outf:
        lines1 = f1.readlines()
        lines2 = f2.readlines()
        lines3 = f3.readlines()
        lines4 = f4.readlines()
        lines5 = f5.readlines()
        lines6 = f6.readlines()

        max_len = max(
            len(lines1), len(lines2), len(lines3), len(lines4), len(lines5), len(lines6)
        )

        for i in range(max_len):
            if i < len(lines1):
                outf.write(lines1[i])
            if i < len(lines2):
                outf.write(lines2[i])
            if i < len(lines3):
                outf.write(lines3[i])
            if i < len(lines4):
                outf.write(lines4[i])
            if i < len(lines5):
                outf.write(lines5[i])
            if i < len(lines6):
                outf.write(lines6[i])


merge_files(
    "sim-data/bms_sim.txt",
    "sim-data/mc_pdo2_sim.txt",
    "sim-data/mc_pdo4_sim.txt",
    "sim-data/vcu_status_sim.txt",
    "sim-data/vcu_wheel_speeds_sim.txt",
    "sim-data/vcu_pedals_sim.txt",
    "data/simulation_data.txt",
)
