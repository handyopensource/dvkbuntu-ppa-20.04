#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_ConfigORCA_clicked();

    void on_Discord_clicked();

    void on_Forum_clicked();

    void on_OuvrirKmag_clicked();

    void on_OuvrirSiteWeb_clicked();

    void on_Contacts_clicked();

    void on_OuvrirChromium_clicked();

private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
